const createTextElement = (value) => ({
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: value,
    children: [],
  },
});

const Rayact = {
  description: "self made react by raykie.",
  createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children: children.map((child) =>
          typeof child === "object" ? child : createTextElement(child)
        ),
      },
    };
  },
};

export default Rayact;
