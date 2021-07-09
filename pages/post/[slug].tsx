import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'

const CONTENT_API_KEY = process.env.CONTENT_API_KEY;
const API_URL = process.env.API_URL;

const getPosts = async (slug: string) => {
    const res = await fetch(`${API_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`) 
    .then((res) => res.json());

    const posts = res.posts;

    return posts[0];
}

export const getStaticPaths = () => {
    // paths -> slugs which are allowed
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPosts(params.slug)
  
    return {
      props: { post }
    }
  }

type Post = {
    title: string,
    html: string,
    slug: string,
}

const Post: React.FC<{post: Post}> = (props) => {

    const router = useRouter();

    const { post } = props;
    const [enableLoadComments, setEnableLoadComments] = useState<boolean>(true);


    if(router.isFallback) {
        // Should change out with a cool custom spinner ot loading component
        return(
            <div className={styles.container}>
                <h1>Loading ... </h1>
            </div>
        )
    }

    function loadComments(){
        setEnableLoadComments(false);
        // load disqus
        ;(window as any).disqus_config = function() {
            this.page.url = window.location.href;
            this.page.identifier = post.slug;
        }

        const script = document.createElement('script')
        script.src = 'https://the-coding-cavalry.disqus.com/embed.js'
        script.setAttribute('data-timestamp', Date.now().toString())
        document.body.appendChild(script)
    }

    console.log(props)
    return(
        <>
            <Head>
                <title>The Coding Cavalry | {post.title}</title>
                <script data-ad-client="ca-pub-2840864065190538" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            </Head>
            <Container>
                <Row className={`py-5`}>
                    <Col>
                        <Link href="/" passHref>
                            <Button className="btn-light btn-link">
                                RETURN HOME
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row className={`text-center`}>
                    <Col>
                        <h1 className={`font-weight-bold display-3 pb-5`}>{ post.title }</h1>
                    </Col>
                </Row>
                <Row className={`pb-5`}>
                    <Col>
                        <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
                    </Col>
                </Row>
                {enableLoadComments && <Button className='styles.goback' onClick={loadComments}>
                    View Comments
                </Button>}
                <Row className={`pt-5`}>
                    <Col>
                        <div className={styles.disqus_thread} id="disqus_thread"></div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Post;