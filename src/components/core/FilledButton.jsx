/* eslint-disable react/prop-types */


function FilledButton({ label, onClick }) {
    return (
        <button
            className="bg-primary px-6 py-3 rounded-lg text-black cursor-pointer hover:opacity-70 active:scale-95"
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default FilledButton