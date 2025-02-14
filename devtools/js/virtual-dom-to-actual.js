// Build a Virtual DOM to actual HTML DOM Convertor | DOM Renderer
// In this question, the candidate needs to build a utility renderToDOM that will convert a given Virtual
// DOM object into actual HTML DOM elements. The final DOM tree should be rendered on the screen.

// Requirements
// The given Virtual DOM object could contain children with mixed HTML element types such as ul, li, form, table, text nodes, fragments, and even empty elements.
// The method should not return anything. It should directly append to DOM under the provided domNode.
// Syntax
// renderToDOM(virtualNode, domNode);
// Arguments
// virtualNode: An object describing the DOM tree.
// domNode: The root node.
// Returns
// No return value
// Example
// const virtualNode = {
//   type: "div",
//   props: {
//     class: "heading-container",
//     children: {
//       0: "This is",
//       1: {
//         type: "h1",
//         props: {
//           key: "10",
//           id: "heading",
//           children: "devtools.tech",
//         },
//       },
//       2: {
//         type: "h2",
//         props: {
//           id: "heading",
//           children: "is Awesome!!",
//         },
//       },
//       3: {
//         type: "input",
//         props: {
//           type: "text",
//           value: "Devtools Tech",
//         },
//       },
//       4: {
//         type: "button",
//         props: {
//           children: "Click",
//         },
//       },
//       5: 0,
//       6: {
//         props: {
//           children: {
//             0: {
//               type: "div",
//               props: {
//                 children: "React",
//               },
//             },
//             1: {
//               type: "div",
//               props: {
//                 children: "Fragment",
//               },
//             },
//           },
//         },
//       },
//       7: "",
//     },
//   },
// };
// const domNode = document.getElementById('root');
// renderToDOM(virtualNode, domNode);

const virtualNode = {
  type: 'div',
  props: {
    class: 'heading-container',
    children: {
      0: 'This is',
      1: {
        type: 'h1',
        props: {
          key: '10',
          id: 'heading',
          children: 'devtools.tech',
        },
      },
      2: {
        type: 'h2',
        props: {
          id: 'heading',
          children: 'is Awesome!!',
        },
      },
      3: {
        type: 'input',
        props: {
          type: 'text',
          value: 'Devtools Tech',
        },
      },
      4: {
        type: 'button',
        props: {
          children: 'Click',
        },
      },
      5: 0,
      6: {
        props: {
          children: {
            0: {
              type: 'div',
              props: {
                children: 'React',
              },
            },
            1: {
              type: 'div',
              props: {
                children: 'Fragment',
              },
            },
          },
        },
      },
      7: '',
    },
  },
}
