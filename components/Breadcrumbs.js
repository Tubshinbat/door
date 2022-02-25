import base from "base";
import css from "styles/Breadcrumbs.module.css";

const PageHead = (props) => {
  return (
    <div className={css.Page__header}>
      <div className="container">
        <h4
          className={` wow animate__animated animate__fadeInDown`}
          data-wow-delay={`0.3s`}
        >
          {" "}
          {props.title}
        </h4>
        <ul className={css.Breads}>
          <li
            className={` wow animate__animated animate__fadeInLeft`}
            data-wow-delay={`0.5s`}
          >
            <a href={base.baseUrl}>Нүүр хуудас </a>
          </li>
          {props.prev && (
            <li
              className={` wow animate__animated animate__fadeInLeft`}
              data-wow-delay={`0.7s`}
            >
              <a href={props.prevLink}> {props.prev} </a>
            </li>
          )}
          <li
            className={` wow animate__animated animate__fadeInLeft`}
            data-wow-delay={`0.9s`}
          >
            {props.title}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageHead;
