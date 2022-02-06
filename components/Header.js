import headerStyles from "../styles/Header.module.css";

export default function Header() {
  const x = 2;
  return (
    <div>
      <h1 className="title">
        <span>News</span>
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "green"};
          }
        `}
      </style>
    </div>
  );
}
