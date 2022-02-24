import css from "styles/Breadcrumbs.module.css";

const PageHead = (props) => {
  return (
    <div className={css.Page__header}>
      <div className="container">
        <h4> {props.title}</h4>
        <ul className={css.Breads}>
          <li>
            <a href="/">Нүүр хуудас </a>
          </li>
          <li> {props.title}</li>
        </ul>
      </div>
    </div>
  );
};

export default PageHead;
