export function Error({ message, onConfirm }) {
  return (
    <div className="meal-item">
      <h2>An error occurred!</h2>
      <p>{message}</p>
      {onConfirm && (
        <div id="confirmation-actions">
          <button onClick={onConfirm} className="button">
            Okay
          </button>
        </div>
      )}
    </div>
  )
}
