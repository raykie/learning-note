let nextUnitOfWork = null;

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
  createDom(fiber) {
    const dom =
      element.type === "TEXT_ELEMENT"
        ? document.createTextNode(element.props.nodeValue)
        : document.createElement(element.type);
    const isValid = (key) => key !== "children";
    Object.keys(element.props)
      .filter(isValid)
      .forEach((key) => (dom[key] = element.props[key]));
    return dom;
  },
  render(element, container) {
    nextUnitOfWork = {
      dom: container,
      props: {
        children: [element],
      },
    };
  },
};

export default Rayact;
