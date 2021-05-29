const InputTodo = (props) => {
    const { todoText, onChange, onClick, disabled } = props;
  
    return (
      <div className="input-area">
        <input
          disabled={disabled}
          placeholder="入力"
          value={todoText}
          onChange={onChange}
        />
        <button disabled={disabled} onClick={onClick}>
          追加
        </button>
      </div>
    );
  };
  
  export default InputTodo;
  