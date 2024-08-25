import BreadCumb from "../../components/breadcumb/breadcumb";
import SideSection from "../../components/sideSection/sideSection";
import SubscriptionArea from "../../components/subscriptionArea/subscriptionArea";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../api/api";
import { useParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const BlogDetailsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [blogComponent, setBlogComponent] = useState([]);
  const [blogComments, setBlogComments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const [commentData, setCommentData] = useState({
    fullName: "",
    email: "",
    comment: "",
  });

  useEffect(() => {
    fetchBlogComponent(id);
    fetchBlogComments(id);
  }, [id]);

  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMMM, yyyy");
  };

  const handleInputChange = (e) => {
    setCommentData({ ...commentData, [e.target.name]: e.target.value });
  };

  const addComment = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/comment`, {
        fullName: commentData.fullName,
        email: commentData.email,
        comment: commentData.comment,
        blogId: id,
      });

      if (response.status === 201) {
        setCommentData({ fullName: "", email: "", comment: "" });
        fetchBlogComments(id);
      }
    } catch (error) {
      console.error("Error posting comment", error);
      alert("Failed to post comment. Please try again later.");
    }
  };

  const fetchBlogComponent = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/component/${id}`);
      const blogComponent = await response.data;
      setBlogComponent(blogComponent);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchBlogComments = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/comment/${id}`);
      console.log(response.data);
      const comments = response.data.comments || [];

      setBlogComments(Array.isArray(comments) ? comments : [comments]);
      setCommentCount(response.data.count || 0);
    } catch (error) {
      console.error("Error fetching data:", error);
      setBlogComments([]);
    }
  };

  return (
    <>
      <BreadCumb
        parent={"Blogs"}
        location={blogComponent.title}
        title={blogComponent.title}
      />
      <section className="ot-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-7">
              <div className="ot-blog blog-single">
                <div className="blog-img">
                  <img
                    src="/src/assets/img/blog/blog-s-1-1.jpg"
                    alt="Blog Image"
                  />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <a href="blog.html">
                      <i className="fa-solid fa-calendar-days" />
                      {blogComponent.sub_title}
                    </a>
                    <a href="blog.html">
                      <i className="fa-solid fa-tag" />
                      {blogComponent.sub_heading}
                    </a>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blogComponent.description,
                    }}
                  />
                </div>
              </div>

              <div className="ot-comments-wrap">
                <h2 className="blog-inner-title h3">
                  Comments ({commentCount})
                </h2>
                <ul className="comment-list">
                  {Array.isArray(blogComments) && blogComments.length > 0 ? (
                    blogComments.map((comm, index) => (
                      <li className="ot-comment-item" key={index}>
                        <div className="ot-post-comment">
                          <div className="comment-content">
                            <span className="commented-on">
                              <i className="fal fa-calendar-alt"></i>
                              {formatDate(comm.createdAt)}
                            </span>
                            <h3 className="name">{comm.fullName}</h3>
                            <p className="text">{comm.comment}</p>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <p>No comments yet.</p>
                  )}
                </ul>
              </div>

              <div className="ot-comment-form">
                <div className="form-title">
                  <h3 className="blog-inner-title mb-0">Leave a Comment</h3>
                  <p className="form-text">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                </div>
                <form onSubmit={addComment}>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        placeholder="Your Name*"
                        className="form-control"
                        name="fullName"
                        value={commentData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                      <i className="fal fa-user" />
                    </div>
                    <div className="col-md-6 form-group">
                      <input
                        type="email"
                        placeholder="Your Email*"
                        className="form-control"
                        name="email"
                        value={commentData.email}
                        onChange={handleInputChange}
                        required
                      />
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="col-12 form-group">
                      <textarea
                        placeholder="Write a Comment*"
                        className="form-control"
                        name="comment"
                        value={commentData.comment}
                        onChange={handleInputChange}
                        required
                      />
                      <i className="fal fa-pencil" />
                    </div>
                    <div className="col-12 form-group mb-0">
                      <button className="ot-btn">Post Comment</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <SideSection />
          </div>
        </div>
      </section>

      <SubscriptionArea />
    </>
  );
};

export default BlogDetailsPage;
