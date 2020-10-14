import Sidebar from "./sidebar";
import Widget from "./sidebar/widget";
import WidgetTitle from "./sidebar/widget-title";

const MainSidebar = () => (
  <Sidebar id="MainSidebar">
    <Widget className="widget_recent_entries">
      <WidgetTitle>Recent Post</WidgetTitle>
      <ul>
        <li>
          <a href="#">Creativity Is More Than</a>
        </li>
        <li>
          <a href="#">Designing the perfect</a>
        </li>
        <li>
          <a href="#">Music Player Design</a>
        </li>
        <li>
          <a href="#">A Song And Dance Act</a>
        </li>
        <li>
          <a href="#">By spite about do of allow</a>
        </li>
      </ul>
    </Widget>
    <section className="widget widget_recent_comments">
      <WidgetTitle>Recent Comments</WidgetTitle>
      <ul>
        <li className="recentcomments">
          <span className="comment-author-link">JOHN SMITH</span> on <a href="#">Creativity Is More Than</a>
        </li>
        <li className="recentcomments">
          <span className="comment-author-link">ADAM SMITH</span> on <a href="#">Creativity Is More Than</a>
        </li>
        <li className="recentcomments">
          <span className="comment-author-link">admin</span> on <a href="#">Designing the perfect</a>
        </li>
        <li className="recentcomments">
          <span className="comment-author-link">admin</span> on <a href="#">Designing the perfect</a>
        </li>
        <li className="recentcomments">
          <span className="comment-author-link">James</span> on <a href="#">Designing the perfect</a>
        </li>
      </ul>
    </section>
    <section className="widget widget_archive">
      <WidgetTitle>Archives</WidgetTitle>
      <ul>
        <li>
          <a href="#">November 2018</a>
        </li>
      </ul>
    </section>
    <section className="widget widget_categories">
      <WidgetTitle>Categories</WidgetTitle>
      <ul>
        <li className="cat-item cat-item-2">
          <a href="#">Design</a>
        </li>
        <li className="cat-item cat-item-3">
          <a href="#">Music</a>
        </li>
      </ul>
    </section>
    <section className="widget widget_meta">
      <h2 className="widget-title">
        <span className="widget-title-span">
          <span className="first-letter">Meta</span>
        </span>
      </h2>
      <ul>
        <li>
          <a href="#">Log in</a>
        </li>
        <li>
          <a href="#">Entries feed</a>
        </li>
        <li>
          <a href="#">Comments feed</a>
        </li>
        <li>
          <a href="#">WordPress.org</a>
        </li>
      </ul>
    </section>
  </Sidebar>
);

export default MainSidebar;
