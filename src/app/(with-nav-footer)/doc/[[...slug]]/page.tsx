interface IParams {
  params: {
    slug: string[];
  };
}

const Document = ({ params }: IParams) => {
  console.log("🚀 ~ Document ~ params:", params.slug);

  if (params.slug?.length === 1) {
    return <div>Document feature Id: {params.slug[0]}</div>;
  }

  if (params.slug?.length === 2) {
    return <div>Document concepts Id: {params.slug[1]}</div>;
  }

  if (params.slug?.length === 3) {
    return <div>Document example Id: {params.slug[2]}</div>;
  }

  return <div>Document</div>;
};

export default Document;

// URL:- http://localhost:3000/doc
// URL:- http://localhost:3000/doc/feature1
// URL:- http://localhost:3000/doc/feature1/concepts1
// URL:- http://localhost:3000/doc/feature1/concepts1/example1
