import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import { Container, Row, Col, Image, Button, Jumbotron } from 'react-bootstrap';

// Icons
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const CONTENT_API_KEY = process.env.CONTENT_API_KEY;
const API_URL = process.env.API_URL;


type Post = {
  title: string,
  slug: string,
  custom_excerpt: string,
  published_at: string
}

const getPosts = async () => {
  // &fields is where you filter the stuff you want
  const res = await fetch(`${API_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,published_at`) 
  .then((res) => res.json());

  console.log(res)

  const posts = res.posts.map((post) => post);
  return posts;

}

const getFormattedDate = (date: string) => {
  let getDate = new Date(date);

  switch (getDate.getMonth() + 1) {
    case 1: 
      return `January ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 2: 
      return`February ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 3: 
      return `March ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 4: 
      return `April ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 5: 
      return `May ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 6: 
      return `June ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 7: 
      return `July ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 8: 
      return `August ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 9: 
      return `September ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 10: 
      return `October ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 11: 
      return `November ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
    case 12: 
      return `December ${getDate.getDay()}, ${getDate.getFullYear()}`;
      break;
  }
}

export const getStaticProps = async ({ params }) => {
  const posts = await getPosts()

  return {
    props: { posts }
  }
}

const Home: React.FC<{posts: Post[]}> = (props) => {

  const { posts } = props;

  return (
    <>
      <Head>
        <title>The Coding Cavalry | Home</title>
        <script data-ad-client="ca-pub-2840864065190538" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Jumbotron className={`${styles.showcaseBG} fluid-jumbotron`}>
        <Container>
        <Row className={`align-items-center text-center`}>
          <Col md={5}>
            <h1 className={`font-weight-bold display-2 align-items-center py-5 ${styles.homePageTitle} ${styles.westernFont}`}>The Coding Cavalry</h1>
            {/* Social Links */}
              <Row className="pb-2">
                <Col>
                  <a href="https://twitter.com/CavalryCoding" target="_blank" rel="noreferrer" className={`btn btn-primary rounded-circle`} role="button">
                    <TwitterIcon/>
                  </a>
                            
                  <a href="https://www.youtube.com/channel/UC5BMmH2DvXboFMSiUBquCww/featured" target="_blank" rel="noreferrer" className={`btn btn-primary rounded-circle mx-4`} role="button">
                    <YouTubeIcon/>
                  </a>

                  <a href="https://www.linkedin.com/in/davidlindnerjr/"  target="_blank" rel="noreferrer" className={`btn btn-primary rounded-circle`} role="button">
                    <LinkedInIcon/>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col md={7}>
              <Image className={`${styles.footerLogoSize} d-none d-sm-block`} src="/The-Coding-Cavalry-Logo.png" alt="Robot Cowboy"/>
            </Col>
          </Row>
        </Container>
      </Jumbotron> 
      <Container>
      {/* Blog Posts */}
        <Row className={`text-center`}>
          {posts.map((post) => {
            return (
              <Col md={12} key={post.title} className={`py-5`}>
                <h1 className={`display-4 text-decoration-none font-weight-bold`}>{post.title}</h1>
                <h5 className={`text-muted pt-1 pb-4`}>{getFormattedDate(post.published_at)}</h5>
                <h3 className={`text-left px-5 pb-5`}>{ post.custom_excerpt }</h3>
                  <Link href="/post/[slug]" as={`/post/${post.slug}`} passHref>
                    <Button>
                      READ MORE
                    </Button>
                  </Link>
              </Col>
            )
            })}
        </Row>
      </Container> 
    </>
  )
}

export default Home;
