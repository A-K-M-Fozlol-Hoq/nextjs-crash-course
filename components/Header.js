import headerStyle from "../styles/Header.module.css";

const Header = () => {
//   const x = 5;
  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>WebDev</span> news
      </h1>
      <p className={headerStyle.description}>Keep up to date with latest webDev news</p>
      {/* <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "green"};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
