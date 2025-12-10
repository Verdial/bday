import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/globals.css';

export default function BirthdayCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className=\"min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 p-6\">
      <div className=\"max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center\">
        <div className=\"relative flex items-center justify-center\">
          <div className=\"transform -rotate-3\">
            <motion.button
              onClick={() => setOpen(true)}
              whileTap={{ scale: 0.96 }}
              className=\"relative w-72 h-48 md:w-96 md:h-56 bg-gradient-to-tr from-red-600 to-[#ff4d6d] rounded-2xl shadow-2xl overflow-hidden border-4 border-black\"
            >
              <div className=\"absolute -top-8 -right-8 w-40 h-40 bg-[radial-gradient(circle_at_10%_20%,rgba(0,0,0,0.08)_0,rgba(0,0,0,0.01)_30%,transparent_70%)] rotate-45\" />

              <motion.div
                initial={{ rotateX: 0 }}
                animate={open ? { rotateX: -160, y: -120 } : { rotateX: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className=\"absolute inset-0 flex items-start justify-center pointer-events-none\"
                style={{ transformOrigin: 'top center' }}
              >
                <div className=\"w-full h-1/2 bg-black/10 border-b border-black/30 rounded-t-2xl\" />
              </motion.div>

              <motion.div
                layout
                initial={{ scale: 1 }}
                animate={open ? { scale: 0.5, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className=\"absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-black flex items-center justify-center text-white font-bold border-2 border-white/20 shadow\"
              >
                P
              </motion.div>

              <div className=\"absolute inset-0 p-6 flex flex-col justify-between\">
                <div className=\"flex justify-between items-start\">
                  <div className=\"text-white text-xs md:text-sm uppercase tracking-widest\">Confidential</div>
                  <div className=\"text-white text-xs md:text-sm font-bold\">For: You</div>
                </div>

                <div className=\"text-white/90 text-lg md:text-2xl font-extrabold\">A Special Delivery</div>

                <div className=\"flex justify-between items-center\">
                  <div className=\"text-white text-xs\">From: Friend</div>
                  <div className=\"text-white/80 text-xs\">Tap to open →</div>
                </div>
              </div>
            </motion.button>
            <div className=\"mt-4 text-center text-sm text-white/60\">Tap the envelope to open</div>
          </div>
        </div>

        <div className=\"bg-gradient-to-br from-[#111] to-[#2a0b0b] rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-red-700/40\">
          <div className=\"flex items-center justify-between mb-4\">
            <h2 className=\"text-white text-2xl md:text-3xl font-extrabold tracking-tight\">Inbox</h2>
            <div className=\"text-sm text-red-300/90 uppercase font-bold\">1 New</div>
          </div>

          <div className=\"bg-black/30 rounded-xl p-4 md:p-6 border border-black/40\">
            <div className=\"flex items-start gap-4\">
              <div className=\"w-12 h-12 rounded-md bg-red-700/80 flex items-center justify-center text-white font-bold text-lg\">🎴</div>
              <div className=\"flex-1\">
                <div className=\"text-white font-semibold\">A Secret Letter</div>
                <div className=\"text-white/60 text-sm mt-1\">Click the envelope to reveal a message — something stylish awaits.</div>
              </div>
              <div className=\"text-sm text-white/60\">Now</div>
            </div>
          </div>

          <div className=\"mt-6 text-white/60 text-sm\">Design notes: bold reds, heavy blacks, comic-style typography.</div>

          <div className=\"mt-6 flex gap-3\">
            <button onClick={() => setOpen(true)} className=\"px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold shadow\">Open Letter</button>
            <button onClick={() => setOpen(false)} className=\"px-4 py-2 rounded-xl bg-transparent border border-white/20 text-white/80\">Close</button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=\"fixed inset-0 z-50 flex items-center justify-center p-6\">
            <motion.div initial={{ scale: 0.8, rotate: -4 }} animate={{ scale: 1, rotate: 0 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 25 }} className=\"max-w-2xl w-full bg-gradient-to-b from-white to-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-black\">
              <div className=\"flex justify-between items-start\">
                <div>
                  <div className=\"text-4xl md:text-5xl font-extrabold tracking-tight text-[#111]\">Selamat Ulang Tahun!</div>
                  <div className=\"mt-2 text-sm text-black/60\">Semoga hari ini penuh kejutan dan kebahagiaan.</div>
                </div>

                <button onClick={() => setOpen(false)} className=\"text-sm text-red-600 font-bold bg-red-100/30 rounded-md px-3 py-1\">Tutup</button>
              </div>

              <div className=\"mt-6 bg-black/5 p-6 rounded-xl border border-black/5\">
                <p className=\"text-gray-800\">Hari ini adalah hari spesial — rayakan dengan cake, lagu, dan teman-teman.</p>

                <div className=\"mt-4 flex gap-3\">
                  <a className=\"inline-block px-4 py-2 rounded-lg bg-red-600 text-white font-bold\" href='#'>Buka Kado</a>
                  <a className=\"inline-block px-4 py-2 rounded-lg bg-transparent border border-black/10 text-gray-700\" href='#'>Kirim Balas</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className=\"absolute left-6 bottom-6 text-xs text-white/30\">Birthday Vercel App</div>
    </div>
  );
}
