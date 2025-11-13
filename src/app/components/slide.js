// import { motion } from "framer-motion";

// export default function Slide({ title, content, image, bgColor }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className={`min-h-screen flex flex-col justify-center items-center px-6 text-center ${bgColor}`}
//     >
//       {title && (
//         <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//           {title}
//         </h1>
//       )}
//       {content && (
//         <div className="text-lg md:text-xl mb-6 text-white space-y-4">
//           {content.map((line, index) => (
//             <p key={index}>{line}</p>
//           ))}
//         </div>
//       )}
//       {image && (
//         <img
//           src={image}
//           alt="slide image"
//           className="w-full max-w-md rounded-lg shadow-lg mt-4"
//         />
//       )}
//     </motion.div>
//   );
// }
