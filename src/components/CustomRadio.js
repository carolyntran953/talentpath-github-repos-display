function customRadio({selected, onChange, text, value}) {
    return (
        <div className="radio-container"
        onClick={() => {
          onChange(value);
        }}>
        <div className={`radio-outer-circle ${value !== selected && "unselected"}`}>
          <div className={`radio-inner-circle ${value !== selected && "unselected-circle"}`} />
        </div>
        <div className="label">{text}</div>
      </div>
    )
}

export default customRadio