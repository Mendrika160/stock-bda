import { GetStaticProps,GetStaticPaths } from 'next';

type BlogPost = {
  id: string;
  title: string;
  body: string;
};

type BlogPostPageProps = {
  post: BlogPost;
};

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <div>
     {post && <>
     
        <p>{post.id}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </>
     }
    </div>
  );
}

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  // Récupérez l'id à partir de l'objet params
  const id = params!.slug as string;
  console.log('id',params)
  // Récupérez les données de l'article de blog en utilisant l'id
  const post = await getBlogPost(id);
  console.log('post',post)

  return { props: { post }};
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

async function getBlogPost(id: string): Promise<BlogPost> {
  // Implémentez cette fonction pour récupérer les données d'un article de blog spécifique en utilisant son id
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const posts = await response.json();
  return posts;
}