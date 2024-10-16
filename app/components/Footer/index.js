const Footer = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-200">
      <div className="flex justify-evenly w-full mb-4 items-center">
        <div className="flex flex-col items-center">
          <span>Author</span>
          <img
            src="https://i.pinimg.com/1200x/64/84/c1/6484c1d710f4eb019dcfc0b77863c712.jpg" // Original author image
            className="w-20 h-20 rounded-full mb-2"
            alt="Daffa Kanaeru's Profile"
          />
          <strong>Daffa Kanaeru</strong>
        </div>
        <div className="flex flex-col items-center">
          <span>Suport by</span>
          <img
            src="https://i0.wp.com/guitarandlace.com/wp-content/uploads/2024/02/Chat-GPT-free-black-app-icons.jpg?ssl=1" // New author image for ChatGPT
            className="w-20 h-20 rounded-full mb-2"
            alt="ChatGPT's Profile"
          />
          <strong>ChatGPT</strong>
        </div>
        <div className="flex flex-col items-center">
          <span>MY sosmed</span>
          <a
            href="https://www.facebook.com/profile.php?id=61566936816986&sk=about"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png"
              alt="Facebook Icon"
              className="w-10 h-10"
            />
          </a>
          <span className="text-sm">MyFacebook</span>
        </div>
      </div>
      <div className="w-full border-t border-gray-400 pt-2">
        <div className="flex justify-center">
          <span className="mr-2">&copy; 2024 MyAnimeList</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
