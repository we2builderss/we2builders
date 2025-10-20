'use client';

import { motion } from 'framer-motion';

export function AnimatedFeatureCard({ icon, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-emerald-500 mb-4"
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-slate-900">{title}</h3>
            <p className="text-slate-600">{description}</p>
        </motion.div>
    );
}

export function AnimatedProcessStep({ number, title, description, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 mx-auto mb-4 bg-emerald-400 rounded-full flex items-center justify-center"
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="text-white"
                >
                    {icon}
                </motion.div>
            </motion.div>
            <div className="text-3xl font-bold mb-2 text-emerald-300">{number}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-emerald-100">{description}</p>
        </motion.div>
    );
}