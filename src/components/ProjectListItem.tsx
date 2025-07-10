import React from "react";

type ListItem = {
  image: any;
  title: string;
};

const ProjectListItem = ({ image, title }: ListItem) => {
  return (
    <li>
      <figure className="text-center font-semibold hover:scale-110 duration-300 transtion">
        <img src={image} alt={title} className="w-[48px] h-[48px]"></img>
        <figcaption>{title}</figcaption>
      </figure>
    </li>
  );
};

export default ProjectListItem;
