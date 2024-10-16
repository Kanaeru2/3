const Header = ({ title, linkHref, linkTitle }) => {
 
 
    return (
    <div className="flex justify-between items-center mb-4">
      <h2>{title}</h2>
      <a href={linkHref} className="text-blue-500 hover:underline">
        {linkTitle}
      </a>
    </div>
  );
};

export default Header;
