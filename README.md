# Rocketium-Project Dummy JSON Data

## Instructions to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/mayank1365/Rocketium-project.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Access the API at:
   ```
   http://localhost:3000/api/data
   ```

## API Endpoints

- `/api/data`: Get all data
- `/api/data/filter`: Filter and sort data
  - Query parameters:
    - `filterBy`: Filter by field
    - `filterValue`: Value to filter
    - `sortBy`: Sort by field



### Endpoints

| **Method** | **URL**                                                                 | **Query Params**                  | **Description**                                 |
|------------|-------------------------------------------------------------------------|----------------------------------|-------------------------------------------------|
| GET        | `/api/data`                                                               |                                  | Get all the data from the Dummy JSON Data      |
| GET        | `/api/data/filter?sortBy=version`                                         | `sortBy=version`                 | Sort the data using the `version` attribute    |
| GET        | `/api/data/filter?filterBy=language&filterValue=hindi`                    | `filterBy=language`<br>`filterValue=hindi` | Filter the data using the `language` attribute |
| GET        | `/api/data/filter?filterBy=name&filterValue=Neha`                       | `filterBy=name`<br>`filterValue=preeti` | Filter the data using the `name` attribute     |



### How to Import the Collection

1. Open Postman.
2. Click on the **Import** button in the top left corner.
3. Choose the **File** tab.
4. Click on **Choose Files** and select the `Rocketium-postman-collection.json` file.
5. Click **Import**.

Now you should see the collection in your Postman with all the documented endpoints.

