
function MainPanel() {
    return (
        <div className="flex-1 overflow-y-auto">
            <ui>
                {
                    Array.from({ length: 100 }, (_, index) => <li key={index}>Item {index + 1}</li>)
                }
            </ui>

        </div>
    )
}

export default MainPanel