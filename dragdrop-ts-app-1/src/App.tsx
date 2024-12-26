const App = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your code here to add the new project to the list
  };

  return (
    <div>
      <h1>There is our App TS</h1>
      <div id='project-input'>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>Title: </label>
            <input type='text' id='title' />
          </div>
          <div className='form-control'>
            <label htmlFor='description'>Description: </label>
            <textarea id='description'></textarea>
          </div>
          <div className='form-control'>
            <label htmlFor='people'>People: </label>
            <input type='number' id='people' step='1' min='0' max='10' />
          </div>
          <button type='submit'>ADD PROJECT</button>
        </form>
      </div>
      <div id='single-project'>
        <li></li>
      </div>
      <div id='project-list'>
        <section className='projects'>
          <header>
            <h2></h2>
          </header>
          <ul></ul>
        </section>
      </div>
      <div id='app'></div>
    </div>
  );
};

export default App;
