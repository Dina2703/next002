import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div>
      <h1 className="title">
        <span>News</span>
      </h1>
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </div>
  );
}
