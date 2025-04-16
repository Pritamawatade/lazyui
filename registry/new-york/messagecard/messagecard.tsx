import { FC } from "react";
import { motion } from "framer-motion";
import { Phone, Video } from "lucide-react";

interface MessageCardProps {
  name?: string;
  message?: string;
  image?: string;
  isOnline?: boolean;
  onCall?: () => void;
  onVideoCall?: () => void;
}

const MessageCard: FC<MessageCardProps> = ({
  name = "John Doe",
  message = "Hey, I miss you a lot. How are you?",
  image = "https://images.unsplash.com/photo-1585728748176-455ac5eed962?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
  isOnline = true,
  onCall = () => alert("Calling..."),
  onVideoCall = () => alert("Starting video call..."),
}) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 py-6 dark:bg-gray-900 sm:py-12">
      {/* Background effects */}
      {/* <img
        src=""
        alt="pic"
        className="pointer-events-none absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-30 dark:opacity-10"
        width="1308"
      /> */}
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-10" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex w-[90%] max-w-md gap-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
      >
        {/* Avatar */}
        <div className="relative h-14 w-14 shrink-0">
          {isOnline && (
            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white dark:ring-gray-800" />
          )}
          <img
            src={image}
            alt={name}
            className="h-14 w-14 rounded-full object-cover object-center border-2 border-white dark:border-gray-800"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col overflow-hidden">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">
            {name}
          </h2>
          <p className="truncate text-sm text-gray-600 dark:text-gray-300">
            {message}
          </p>
        </div>

        {/* Actions */}
        <div className="ml-auto flex flex-col gap-2 justify-center items-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onCall}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-600 transition ring-2 ring-offset-2 ring-indigo-300 focus:outline-none dark:ring-offset-gray-900"
            aria-label="Call"
          >
            <Phone className="w-4 h-4 text-white" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onVideoCall}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-600 transition ring-2 ring-offset-2 ring-indigo-300 focus:outline-none dark:ring-offset-gray-900"
            aria-label="Video Call"
          >
            <Video className="w-4 h-4 text-white" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default MessageCard;
