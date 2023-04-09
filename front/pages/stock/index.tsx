import { GetStaticProps } from 'next';


type PostPageProps = {
    post: {
      id: string;
      title: string;
      body: string;
    };
  };



export default function Stock({ posts }: PostPageProps) {
  return (
    <>
    <div>
      {posts && posts.map(post => ( 
        <div className="post" key={post.id}>
          <h5>{post.id}</h5>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <a href={`/stock/${post.id}`}>see more</a>

        </div>
        

      ))}
 
    </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
}) => {
 
  // Récupérez les données de l'article de blog en utilisant l'id
  const posts = await getBlogPosts();

  return { props: { posts }};
};



async function getBlogPosts(): Promise<PostPageProps[]> {
  // Implémentez cette fonction pour récupérer les données d'un article de blog spécifique en utilisant son id
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const posts = await response.json();
  return posts;
}
