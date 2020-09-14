import React from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import Loader from './components/Loader/Loader';
import Buttons from './components/Buttons/Buttons';
import Table from './components/Table/Table';
import RowDescription from './components/RowDescription/RowDescription';
import SearchLine from './components/SearchLine/SearchLine';
import AddRow from './components/ AddRow/AddRow';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      data: '',
      row: null,
      sort: '',
      sortIcon: '',
      searchWord: '',
      currentPage: 0
    };
  }

  selectData = url => {
    this.setState({
      loader: true
    })

    this.fetchData(url)
  }

  async fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      this.setState({
        loader: false,
        data: data
      });
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  onRowSelect = row => {
    this.setState({row})
  }

  handlePageClick = ({selected}) => {
    this.setState({
      currentPage: selected
    })
  }

  onSort = sortField => {
    const dataCopy = this.state.data.concat(); // копируем данные
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'; // выбираем сортировку
    const sortedData = _.orderBy(dataCopy, sortField, sortType); // отсортированные данные

    let sortIcon;
    
    if ((sortField === 'id' || sortField === 'phone') && sortType === 'asc') {
      sortIcon = '▲';
    } else if ((sortField === 'id' || sortField === 'phone') && sortType === 'desc') {
      sortIcon = '▼';
    } else {
      sortIcon = sortType === 'asc' ? '▼' : '▲';
    }

    this.setState({
      data: sortedData,
      sort: sortType,
      sortField: sortField,
      sortIcon: sortIcon
    })
  }

  searchHandler = searchWord => {
    this.setState({
      searchWord: searchWord,
      currentPage: 0
    })
  } 

  getFilteredData() {
    const data = this.state.data;
    const searchWord = this.state.searchWord;
    
    if (!searchWord) {
      return data
    }

    const searchLine = data.filter(item => {
      return (
        item["firstName"].toLowerCase().includes(searchWord.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(searchWord.toLowerCase()) ||
        item["email"].toLowerCase().includes(searchWord.toLowerCase()) ||
        String(item["id"]).includes(searchWord) ||
        item["phone"].toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if(!searchLine.length) {
      return null;
    } else {
      return searchLine;
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();

    let dataCopy = this.state.data.concat();

    dataCopy.unshift({
        'id': this.state.id,
        'firstName': this.state.firstName,
        'lastName': this.state.lastName,
        'email': this.state.email,
        'phone': this.state.phone
    });

    this.setState({
        data: dataCopy
    });
  };

  handleInputChange = e => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    const pageElementsCount = 50; // количество элементов на странице
    const filteredData = this.getFilteredData(); // отфильтрованные данные
    const currentPageData = filteredData === null ? null : _.chunk(filteredData, pageElementsCount)[this.state.currentPage] // найденные совпадения с поиском
    const pageCount = Math.ceil(filteredData.length / pageElementsCount) // количество страниц

    return (
      <div className="container">
        {this.state.loader ? <Loader/> : null} 
        {this.state.loader ? null : <Buttons onSelect={this.selectData}/>}
        {this.state.loader || this.state.data === '' ? null : <AddRow submitHandle={this.handleFormSubmit} changeHandle={this.handleInputChange}/>}
        {this.state.data === '' || this.state.loader ? null : <SearchLine onSearch={this.searchHandler}/>}
        {this.state.loader || this.state.data === '' ? null : <Table data={currentPageData} onRowSelect={this.onRowSelect} onSort={this.onSort} sortIcon={this.state.sortIcon} sortField={this.state.sortField}/>}
        {this.state.row && !this.state.loader ? <RowDescription row={this.state.row}/> : null}
        {!this.state.loader && this.state.data.length > 50 && filteredData !== null && filteredData.length > 50 ?
          <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          forcePage={this.state.currentPage}
        /> : null} 
      </div>
    );
  }  
}

export default App;
