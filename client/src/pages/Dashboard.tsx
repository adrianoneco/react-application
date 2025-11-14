import React from "react";

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6">
            <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L2.85 19.14A2 2 0 004.61 22h14.78c1.04 0 1.8-1.07 1.46-2.14L13.71 3.86a2 2 0 00-3.42 0z" />
                    </svg>
                </div>
                <h1 className="mt-6 text-2xl font-semibold">Página sem conteúdo</h1>
                <p className="mt-2 text-gray-500">Ainda não há conteúdo disponível nesta página.</p>
            </div>
        </div>
    );
};

export default Dashboard;
