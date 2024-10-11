import { Link } from "react-router-dom";

export const Child = ({
  title,
  description,
  link,
  styling = "w-[250px]",
  image,
  tags,
}) => {
  return (
    <Link to={link} className={`${styling}`}>
      <div
        className={
          "bg-white transition duration-300 pb-5 hover:rounded-md hover:bg-gradient-to-b from-sky-100 to-white"
        }
      >
        {image && <img src={image} alt={title} className="mb-4 rounded-lg" />}
        <h4 className={"text-lg font-afacad-flux text-center"}>{title}</h4>
        <p className={"font-afacad-flux text-balance pt-1 pl-8 pr-8 text-lg"}>
          {description}
          <p className={"flex flex-wrap pt-3"}>
            {tags &&
              tags.map((tag) => (
                <p className={"rounded-sm text-sm mr-1 border pr-1.5 pl-1.5 border-stone-300"} key={tag.value}>
                  {tag.value}
                </p>
              ))}
          </p>
        </p>
      </div>
    </Link>
  );
};
