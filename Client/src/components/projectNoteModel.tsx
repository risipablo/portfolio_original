import { motion, AnimatePresence } from "framer-motion";
import { X, NotepadText } from "lucide-react";
import "../style/noteModel.css"

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  note: string;
  skills: string[];
}

export const ProjectNoteModal = ({ isOpen, onClose, title, note}: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          
          <motion.div
            className="modal-wrapper"
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            
            <div className="modal-header">
              <div className="modal-header-left">
                <div className="modal-icon">
                  <NotepadText size={18} />
                </div>
                <div>
                  <p className="modal-title">{title}</p>
                </div>
              </div>
              <button className="modal-close" onClick={onClose} aria-label="Cerrar">
                <X size={16} />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-note">{note}</p>
            </div>

        
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};