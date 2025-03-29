const About = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Our Application</h1>
        <p className="text-lg mb-4">
          Welcome to our web application! This project is built using **React.js**, **Tailwind CSS**, and **Context API** to manage authentication securely.
        </p>
  
        <h2 className="text-2xl font-semibold mb-2">🚀 Features:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Secure Authentication (Login & Signup)</li>
          <li>Protected Dashboard (Accessible only after login)</li>
          <li>Responsive Design (Mobile & Desktop Friendly)</li>
          <li>State Management using Context API</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2">🛠️ Technologies Used:</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>React.js & React Router</li>
          <li>Tailwind CSS for styling</li>
          <li>Context API for Authentication</li>
        </ul>
  
        <h2 className="text-2xl font-semibold mb-2">📞 Contact Us</h2>
        <p className="text-lg">
          If you have any questions or feedback, feel free to reach out to us!
        </p>
      </div>
    );
  };
  
  export default About;
  