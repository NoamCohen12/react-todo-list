import './Footer.css'

function Footer({ setFilter, activeFilter }) {

    return (
        <div className="footer">
            <div
                className={`footer-item ${activeFilter === 'all' ? 'marked' : ''}`}
                onClick={() => setFilter('all')}
            >
                All
            </div>
            <div
                className={`footer-item ${activeFilter === 'active' ? 'marked' : ''}`}
                onClick={() => setFilter('active')}
            >
                Active
            </div>
            <div
                className={`footer-item ${activeFilter === 'completed' ? 'marked' : ''}`}
                onClick={() => setFilter('completed')}
            >
                Completed
            </div>
            <div className="copyright">
                © 2025 TodoList
            </div>
        </div>
    )
}

export default Footer