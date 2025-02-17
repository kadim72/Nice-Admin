<template>
    <section class="View-section overflow-hidden p-3 pt-0">
        <div class="header-section mb-3">
            <h1 class="m-0">General Tables</h1>
            <div class="path">
                <router-link class="links active me-1" to="./DashboardView.vue">
                    Home / Tables
                </router-link>
                / General Tables
            </div>
        </div>
        <div class="wrapper row align-items-baseline mb-3">
            <div class="part row col-lg-6 col-12 restart pe-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Default Table</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td>Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td>2003-04-5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Wassim Nagi</td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Dark Table</h5>
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td>Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td>2003-04-5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Wassim Nagi</td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Active Table</h5>
                            <p>
                                Highlight a table row or cell by adding a
                                <span class="text-danger"
                                    >.table-active class</span
                                >.
                            </p>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td class="table-active">Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td class="table-active">2003-04-5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td class="table-active">
                                            Wassim Nagi
                                        </td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Table Without Border
                            </h5>
                            <p>
                                Add
                                <span class="text-danger"
                                    >.table-borderless</span
                                >
                                for a table without borders.
                            </p>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td>Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td>2003-04-5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Wassim Nagi</td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Table Variants</h5>
                            <p>
                                Use contextual classes
                                <span class="text-danger"
                                    >.table-primary .table-secondary
                                    .table-success .table-danger .table-warning
                                    .table-info .table-light .table-dark</span
                                >
                                to color tables, table rows or individual cells.
                            </p>
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-primary">
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr class="table-secondary">
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td>Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr class="table-success">
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td>2003-04-5</td>
                                    </tr>
                                    <tr class="table-danger">
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr class="table-warning">
                                        <th scope="row">5</th>
                                        <td>Wassim Nagi</td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                    <tr class="table-info">
                                        <th scope="row">6</th>
                                        <td>Majd Al Maleh</td>
                                        <td>Programmer</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                    <tr class="table-light">
                                        <th scope="row">7</th>
                                        <td>Omar Al Zain</td>
                                        <td>Architecture</td>
                                        <td>20</td>
                                        <td>2003-05-20</td>
                                    </tr>
                                    <tr class="table-dark">
                                        <th scope="row">8</th>
                                        <td>Talal Al Sakkal</td>
                                        <td>Games Developer</td>
                                        <td>21</td>
                                        <td>2002-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>Othman Darkal</td>
                                        <td>Mobile Developer</td>
                                        <td>21</td>
                                        <td>2002-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="part row col-lg-6 col-12 restart ps-lg-2">
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Table with stripped rows
                            </h5>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td>Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td>2003-04-5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Wassim Nagi</td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Table with hoverable rows
                            </h5>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td>Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td>2003-04-5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Wassim Nagi</td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Bordered Table</h5>
                            <p>
                                Add
                                <span class="text-danger">.table-bordered</span>
                                for borders on all sides of the table and cells.
                            </p>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td>Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td>2003-04-5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Wassim Nagi</td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">
                                Colored Border Table
                            </h5>
                            <table class="table table-bordered border-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td>Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td>2003-04-5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Wassim Nagi</td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-12 restart mb-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title mb-3">Small Tables</h5>
                            <p>
                                Add
                                <span class="text-danger">.table-sm</span> to
                                make any
                                <span class="text-danger">.table</span> more
                                compact by cutting all cell padding in half.
                            </p>
                            <table class="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Start Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Brandon Jacob</td>
                                        <td>Designer</td>
                                        <td>28</td>
                                        <td>2016-05-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Bassel Abo Khabsa</td>
                                        <td>Engineer</td>
                                        <td>20</td>
                                        <td>2003-07-20</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Hussam Kraizan</td>
                                        <td>Pharmacist</td>
                                        <td>21</td>
                                        <td>2003-04-5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Mohammed Koutaifany</td>
                                        <td>Dentist</td>
                                        <td>21</td>
                                        <td>2003-04-25</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Wassim Nagi</td>
                                        <td>Doctor</td>
                                        <td>19</td>
                                        <td>2004-04-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "GeneralTablesView",
};
</script>
