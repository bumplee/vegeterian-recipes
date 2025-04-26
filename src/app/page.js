
export default function Form() {
return (
  <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
    <input 
    style={{ width: '250px', padding: '10px', fontSize: '16px'}}
    type="text"
    placeholder="Впишіть сюди текст" />

    <button
    style={{
      width: '125px',
      height: '44px',
      backgroundColor: '#228B22',
      border: '1px solid #44944A',
      borderRadius: '5px',
      fontSize: '14px',
      color: 'white',
      cursor: 'pointer',
      lineHeight: '12px',
    }}
    >
      Згенерувати рецепт
    </button>
  </div>
)};
