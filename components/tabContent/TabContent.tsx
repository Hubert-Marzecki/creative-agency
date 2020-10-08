import { TabContentModel } from "../../Model";

export default function TabContent(props: TabContentModel) {
  return (
    <>
      <img
        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
        alt="hero"
        src={props.img}
      />
      <div className="flex flex-col text-center w-full">
        <h1 className="text-xl font-medium title-font mb-4 text-gray-100">
          {props.title}
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
          {props.text}
        </p>
      </div>
    </>
  );
}
