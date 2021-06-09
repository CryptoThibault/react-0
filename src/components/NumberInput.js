const NumberInput = ({
  id,
  type = 'text',
  value,
  onInputChange,
  isDisabled,
  children,
}) => {
  return (
    <>
      {console.log('NumberInput draw')}
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
        disabled={isDisabled}
      />
    </>
  )
}
export default NumberInput;