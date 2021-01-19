// EmailJs
import emailjs from "emailjs-com";

// Style
import styled from "styled-components";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_43djgar",
      "template_tz5ilpf",
      e.target,
      "user_V4FljNqzoczL9fpBp5euh"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

const ContactMe = () => {
  return (
    <Form>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-data">
          <div className="user-info">
            <input type="text" name="user_name" placeholder="Name" />
            <input type="email" name="user_email" placeholder="Email Address" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
          <textarea name="message" placeholder="Message" />
        </div>
        <div className="send">
          <button type="submit" value="Send">
            <h2>Send</h2>
          </button>
        </div>
      </form>
    </Form>
  );
};

const Form = styled.div`
  margin-bottom: 10rem;

  .contact-form {
    width: 50%;
    margin: auto;
    .form-data {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .user-info {
      display: flex;
      flex-direction: column;
    }

    label {
      padding-right: 1rem;
      font-size: 1.5rem;
    }
    input {
      height: 3rem;
      width: 25rem;
      padding: 1rem;
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    textarea {
      margin-top: -1.9rem;
      font-size: 1.2rem;
      width: 30rem;
      height: 13rem;
      padding: 1rem;
      box-sizing: border-box;
      background-color: #f8f8f8;
      resize: none;
    }
    .send {
      display: flex;
      justify-content: center;
      button {
        padding: 0.8rem 3rem 0.8rem 3rem;
        border-radius: 2em;
        border: none;
        :hover {
          transition: all 0.1s ease-in-out;
          transform: scale(1.1);
          background: #fcfd01;
        }
      }
    }
  }
`;

export default ContactMe;
