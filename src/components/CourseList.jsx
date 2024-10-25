function CourseList() {
  return (
    <div className="course-list">
      <div className="course-item">
        <div className="course-item__img">
          <img src="/images/img1.jpg" alt="img-1" />
        </div>
        <div className="course-item__detail">
          <div className="course-item__body">
            <div>
              <p className="title">React course</p>
              <p className="desc">The Ultimate React and Redux</p>
            </div>
            <span className="rate">4</span>
          </div>
          <div className="course-item__footer">
            <div className="tags">
              <span className="badge badge--secondary">languages</span>
              <span className="badge badge--secondary">languages</span>
            </div>
            <div className="caption">
              <div className="date">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                  day: "numeric",
                })}
              </div>
              <span className="badge badge--primary">completed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default CourseList;
