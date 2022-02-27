import { Link } from "react-router-dom";
const GetStart = () => {
  return (
    <div className="container">
      <div className="overlay"></div>
      <main className="content">
        <h1 id="title">Come with me</h1>
        <p className="content-para">And create a interesting thing</p>
        <Link id="link-to-signin" to="/account/signin">
          GetStart
        </Link>
      </main>
    </div>
  );
};

export default GetStart;
