import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [posts, setPosts] = useState([]);

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [image, setImage] = useState(null);

  const handleLogin = () => {
    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      alert("Login Successful");
    } else {
      alert("Invalid Email or Password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      content,
      image: image
        ? URL.createObjectURL(image)
        : null,
    };

    setPosts([newPost, ...posts]);

    setTitle("");
    setContent("");
    setImage(null);

    alert("Blog Created Successfully");
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter(
      (post) => post.id !== id
    );

    setPosts(updatedPosts);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #141e30, #243b55)",
        minHeight: "100vh",
        padding: "30px",
        fontFamily: "Arial",
        color: "white",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "55px",
          marginBottom: "30px",
          color: "#00ffd5",
        }}
      >
        MERN BLOG APPLICATION
      </h1>

      {/* LOGIN */}

      <div
        style={{
          background: "white",
          color: "black",
          padding: "25px",
          borderRadius: "15px",
          maxWidth: "700px",
          margin: "auto",
          marginBottom: "30px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#243b55",
          }}
        >
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid gray",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid gray",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            background: "#243b55",
            color: "white",
            padding: "12px 25px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            width: "100%",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </div>

      {/* CREATE BLOG */}

      <div
        style={{
          background: "white",
          color: "black",
          padding: "25px",
          borderRadius: "15px",
          maxWidth: "700px",
          margin: "auto",
          marginBottom: "30px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#243b55",
          }}
        >
          Create Blog Post
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid gray",
            }}
            required
          />

          <textarea
            placeholder="Write Blog Content..."
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            rows="8"
            style={{
              width: "100%",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "10px",
              border: "1px solid gray",
            }}
            required
          />

          <input
            type="file"
            onChange={(e) =>
              setImage(e.target.files[0])
            }
          />

          <br />
          <br />

          <button
            type="submit"
            style={{
              background: "#00b894",
              color: "white",
              padding: "12px 25px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
            }}
          >
            Create Post
          </button>
        </form>
      </div>

      {/* POSTS */}

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          All Blog Posts
        </h2>

        {posts.length === 0 ? (
          <p
            style={{
              textAlign: "center",
            }}
          >
            No Blog Posts Yet
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              style={{
                background: "white",
                color: "black",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "20px",
                boxShadow:
                  "0px 0px 15px rgba(0,0,0,0.4)",
              }}
            >
              <h2
                style={{
                  color: "#243b55",
                }}
              >
                {post.title}
              </h2>

              <p>{post.content}</p>

              {post.image && (
                <img
                  src={post.image}
                  alt="blog"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              )}

              <br />
              <br />

              <button
                style={{
                  background: "#0984e3",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                Edit
              </button>

              <button
                onClick={() =>
                  deletePost(post.id)
                }
                style={{
                  background: "#d63031",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;