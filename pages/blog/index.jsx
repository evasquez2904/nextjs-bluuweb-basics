import Layout from '../../components/Layout';
import Link from 'next/link';

export default function blog({ data }) {
  return (
    <Layout>
      <div>
        <h1>Lista de posts</h1>
        {data.map(({ id, title, body }) => (
          <div key={id}>
            <h3>
              <Link href={`/blog/${id}`}>
                <a>
                  {id} - {title}
                </a>
              </Link>
            </h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
