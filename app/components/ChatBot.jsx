"use client";
import React, { useEffect, useRef, useState } from "react";
import { TbMessageCircleFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { IoSend } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import { MessageCircleMore, MessageSquareText } from "lucide-react";
import { Input } from "@/components/ui/input";
import AnimateImage from "../utils/AnimateImage";

const ChatBot = () => {
  // useref for chat scroller
  const chatEndRef = useRef(null);
  // state for chat box
  const chatbotData = [
    {
      id: 1,
      type: "chatbot",
      message: "Hi there! 👋 I'm here to help. How can I assist you today?",
    },

    {
      id: 2,
      type: "chatbot",
      message: "Click for more queries",
    },

    {
      id: 3,
      type: "chatbot",
      message: "I hope your query get Resolved",
    },
  ];

  const QuestionBank = [
    {
      id: 1,
      type: "chatbot",
      cat: "service",
      question: "What are your business hours?",
      response:
        "Our support team is available Monday through Friday, from 9 AM to 6 PM (EST). If you contact us outside these hours, we'll respond as soon as possible on the next business day.",
    },
    {
      id: 2,
      type: "chatbot",
      cat: "shipping",
      question: "How can I track my order?",
      response:
        "You can track your order by logging into your account and visiting the 'Orders' section. A tracking link will be provided once your order has shipped.",
    },
    {
      id: 3,
      type: "chatbot",
      cat: "shipping",
      question: "Do you offer international shipping?",
      response:
        "Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary depending on your location.",
    },
    {
      id: 4,
      type: "chatbot",
      cat: "order",
      question: "Can I modify or cancel my order after placing it?",
      response:
        "You can modify or cancel your order within one hour of placing it. Please contact our support team as soon as possible to make any changes.",
    },
    {
      id: 5,
      type: "chatbot",
      cat: "payment",
      question: "What payment methods do you accept?",
      response:
        "We accept all major credit cards, PayPal, Apple Pay, and Google Pay for secure and convenient checkout.",
    },
    {
      id: 6,
      type: "chatbot",
      cat: "account",
      question: "How do I reset my password?",
      response:
        "To reset your password, click on 'Forgot Password' on the login page and follow the instructions sent to your registered email.",
    },
    {
      id: 7,
      type: "chatbot",
      cat: "account",
      question: "How can I update my account information?",
      response:
        "Log in to your account, go to the 'Account Settings' section, and update your personal information as needed.",
    },
    {
      id: 8,
      type: "chatbot",
      cat: "technical",
      question: "The website isn’t loading. What should I do?",
      response:
        "Try refreshing the page, clearing your browser cache, or using a different browser. If the problem persists, contact support.",
    },
    {
      id: 9,
      type: "chatbot",
      cat: "technical",
      question: "Why am I not receiving email confirmations?",
      response:
        "Please check your spam or junk folder. If it’s not there, ensure your email address is entered correctly in your account settings.",
    },
    {
      id: 10,
      type: "chatbot",
      cat: "service",
      question: "Do you have a return policy?",
      response:
        "Yes, we offer a 30-day return policy on most items. Please review our Returns page for details and exceptions.",
    },
  ];

  // state for  previous question data  which is already view by user

  const [prevQuestion, setPrevQuestion] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const [chatMessage, setChatMessage] = useState([]);
  const [answer, setanswer] = useState({
    id: "",
    ans: [],
  });

  const [userResponse, setUserResponse] = useState("");

  const HandleClick = ({ question }) => {
    if (question) {
      const findAnswer = QuestionBank?.filter(
        (val) => val?.question === question
      )[0];

      // gettig more question
      setChatMessage((prev) => {
        //get randowm questions
        const moreQuestion = QuestionBank?.filter(
          (value) =>
            value?.cat === findAnswer?.cat && value?.question !== question
        )?.slice(0, 3);

        const messageText =
          findAnswer?.response || "Sorry, I don't have an answer for that.";

        return [
          ...prev,
          {
            type: "chatbot",
            id: prev.length + 1,
            response: messageText,
            message:
              moreQuestion?.length > 0
                ? chatbotData[1]?.message
                : chatbotData[2]?.message,
            questions: moreQuestion,
          },
        ];
      });
    }
  };

  const HandleSubmitMessge = () => {
    if (!userResponse) return;

    // Step 1: Add user message
    setChatMessage((prevMessages) => {
      const updatedMessages = [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          message: userResponse,
          type: "user",
        },
      ];

      const searchTerm = userResponse?.toLowerCase()?.trim();

      // result of question
      const results = QuestionBank?.filter((val) =>
        val?.question?.toLowerCase()?.includes(searchTerm.toLowerCase())
      );

      let botMessage;

      if (results?.length > 0) {
        // Step 3: Add chatbot response
        botMessage = {
          id: updatedMessages.length + 1,
          message: "Please pick a suitable option",
          type: "chatbot",
          questions: [...results],
        };
      } else {
        botMessage = {
          id: updatedMessages.length + 1,
          message:
            "I'm sorry, I didn't quite catch that. You can connect with one of our support specialists at 354351324 for further assistance.",
          type: "chatbot",
        };
      }

      return [...updatedMessages, botMessage];
    });

    setUserResponse(""); // clear input field
  };
  useEffect(() => {
    // pcking random question for starting
    const randomQuestion = QuestionBank.slice(0, 4);
    setPrevQuestion(randomQuestion);

    let botmessage = {
      ...chatbotData[0],
      questions: randomQuestion,
    };

    setChatMessage([botmessage]);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessage]);

  return (
    <>
      <AnimatePresence>
        <div className=" fixed right-4 bottom-4 flex items-center justify-center ">
          {/* messanger */}
          {!showChat && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              key={"chatbtn"}
              className="z-[300] bg-primary rounded-full p-1 shadow-sm"
              onClick={() => setShowChat(!showChat)}
            >
              <MessageCircleMore className="" color="#7b68ee" size={40} />
              {/* <MessageSquareText color="#7b68ee" size={40} /> */}
            </motion.button>
          )}
        </div>

        {showChat && (
          <motion.div
            key={"chatbot"}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={` lg:h-[80vh] min-h-[70vh]   rounded-lg    bg-white w-[95%] sm:w-[60%] md:w-[50%] lg:w-[25%] shadow-lg fixed z-[300] right-2 overflow-hidden  bottom-4 lg:right-4  b`}
          >
            <div className="bg-purple-500">
              <div className="flex  items-center justify-between">
                <div className="flex items-center gap-2  p-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-10 rounded-full  object-cover w-10"
                    alt=""
                  />

                  <div className="space-y-[-6px] text-white">
                    <h4 className="font-bold text-sm">Lynk247</h4>
                    <span className="text-sm ">Ai chat Bot</span>
                  </div>
                </div>

                <button className="p-3" onClick={() => setShowChat(!showChat)}>
                  <RxCross2 color="#ffffff" size={20} />
                </button>
              </div>
            </div>

            {/* chat box  */}

            <div className=" max-h-[70vh] h-[70vh] lg:max-h-[63vh] lg:h-[63vh] overflow-y-scroll p-3 space-y-4">
              <div className="flex items-center justify-center">
                {/* <span className="text-para text-sm">Sat, Mar 29, 2:15 pm</span> */}
              </div>

              {/* message  1 */}
              {chatMessage?.length > 0 &&
                chatMessage?.map((val) => {
                  if (val?.type === "chatbot") {
                    return (
                      <motion.div
                        initial={{ y: 20, scale: 0.9 }}
                        whileInView={{ y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        key={val?.id}
                        className="flex flex-col items-start justify-start"
                      >
                        <div className="relative flex items-start gap-3 rounded-lg text-sm">
                          {/* Avatar Image */}
                          <div className="relative h-8 w-8 min-w-[1.5rem] rounded-full overflow-hidden">
                            <AnimateImage
                              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=80"
                              className="object-cover"
                              alt="User Avatar"
                              fill
                            />
                          </div>

                          {/* Message & Questions */}

                          <div className="flex flex-col gap-2 items-start">
                            {val?.response && (
                              <motion.div className="flex bg-[#f1f4f7] p-2 items-center justify-end rounded-lg">
                                <p className="text-para/70 text-[0.9rem]">
                                  {val?.response}
                                </p>
                              </motion.div>
                            )}

                            <motion.div className="flex bg-[#f1f4f7] p-2 items-center justify-end rounded-lg">
                              <p className="text-para/70 text-[0.9rem]">
                                {val?.message}
                              </p>
                            </motion.div>

                            {val?.questions && (
                              <div className=" text-blue-600 ">
                                <ul className="flex flex-col gap-2">
                                  {val?.questions?.map((value) => (
                                    <li
                                      key={value?.id}
                                      onClick={() => HandleClick(value)}
                                      className="text-[0.8rem]  cursor-pointer p-2 rounded-full ring-1 ring-blue-600"
                                    >
                                      {value?.question}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  } else {
                    return (
                      <motion.div
                        initial={{ y: 20, scale: 0.9 }}
                        whileInView={{ y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        key={val?.id}
                        className="flex   items-end flex-col   justify-center   "
                      >
                        <motion.div className="flex  items-center bg-[#f1f4f7] rounded-lg  p-3   justify-end">
                          <div className=" relative  rounded-lg text-[0.9rem]">
                            <p className="text-para/70">{val?.message}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  }
                })}

              <div ref={chatEndRef} />
            </div>

            {/* message input field */}

            <div className="flex items-center gap-1 px-2 py-2">
              <Input
                type="text"
                placeholder="Enter a message"
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                className=" w-full p-2 py-5 focus:border-gray-500  rounded-full text-sm common-border"
              />

              <button
                onClick={HandleSubmitMessge}
                className="  py-[10px] primary-btn "
              >
                <IoSend size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
