import React, { useEffect, useRef, useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Header from "./Header";
import InputTweet from "./InputTweet";
import FeedItems from "./FeedItems";
import { DataFeedDemo } from "./DataFeedDemo";
import { db, storage } from "../../../firebase";
import Posts from "./Posts";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import firebase from "firebase";
function FeedSession() {
  const [tweetMessage, setTweetMessage] = useState("");
  const filepickerRef = useRef(null);
  const [tweetImage, setTweetImage] = useState("");
  const [posts, setPosts] = useState([]);
  console.log("this is posts", posts);
  const user = useSelector(selectUser);
  // listen realtime change when posts update
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);
  // push posts into db firestore
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts")
      .add({
        name: user.displayName,
        description: "Fontend",
        message: tweetMessage,
        email: user.email,
        verified: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        countComent: "12k",
        countLike: "120k",
        countTweet: "20k",
      })
      .then((doc) => {
        if (tweetImage) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(tweetImage, "data_url");
          removeImage();
          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(error),
            () => {
              //when the upload completed
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });
    setTweetMessage("");
  };
  //upload photo to firestore
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setTweetImage(readerEvent.target.result);
    };
  };
  //remove image
  const removeImage = () => {
    setTweetImage(null);
  };
  return (
    <div className="w-full sm:w-11/12 md:w-5/6 lg:w-full md:mr-4 border-r border-gray-100">
      <Header />
      <div className=" bg-blue-50 bg-opacity-20 space-y-4">
        <InputTweet
          filepickerRef={filepickerRef}
          src={tweetImage}
          tweetImage={tweetImage}
          setTweetImage={setTweetImage}
          addImageToPost={addImageToPost}
          removeImage={removeImage}
          tweetMessage={tweetMessage}
          setTweetMessage={setTweetMessage}
          onClick={sendTweet}
        />
        {/* This is real Posts */}
        {posts.map((post) => (
          <Posts
            displayName={post.data.name}
            description={post.data.description}
            message={post.data.message}
            postImage={post.data.postImage}
            email={post.data.email}
            verified={true}
            timeStamp={post.data.timestamp}
            countTweet={post.data.countTweet}
            countComent={post.data.countComent}
            countLike={post.data.countLike}
          />
        ))}
        {/* Fake set Hard Post */}
        {DataFeedDemo.map((dataDemo, index) => (
          <>
            <FeedItems
              key={index}
              name={dataDemo.name}
              certification={dataDemo.certification}
              imagesProfile={dataDemo.imagesProfile}
              email={dataDemo.email}
              timeStamp={dataDemo.timeStamp}
              content={dataDemo.content}
              imagesTweet={dataDemo.imagesTweet}
              countComent={dataDemo.countComent}
              countTweet={dataDemo.countTweet}
              countLike={dataDemo.countLike}
            />
          </>
        ))}
      </div>
      {/* Mobile add Feed */}
      <button className="h-14 w-14 bg-blue-400 rounded-full fixed bottom-16 right-4 flex sm:hidden justify-center items-center shadow-2xl ">
        <PlusIcon className="h-5 text-white" />
      </button>
    </div>
  );
}

export default FeedSession;
