
# Micro-Frontend Application

This repository demonstrates a micro-frontend architecture with Angular. The project includes a base container application and two micro-frontend applications (MFEs): `insurance-details` and `premium-payment`.  

## Prerequisites

Ensure the following tools are installed on your system:  
- [Node.js](https://nodejs.org/) (v14 or later)  
- [Angular CLI](https://angular.io/cli)  

## Getting Started  

Follow these steps to set up and run the project:  

### Step 1: Clone the Repository  
Clone this repository using the following command:  
```bash  
git clone https://github.com/love9684/mfe.git  
```  

### Step 2: Install Dependencies  
Navigate to the project folder and install the required dependencies:  
```bash  
cd mfe  
npm install  
```  

### Step 3: Start the Host Application  
Run the container application (host) using this command:  
```bash  
ng serve container-app -o  
```  

### Step 4: Start the First Micro-Frontend (MFE1)  
Run the `insurance-details` micro-frontend with this command:  
```bash  
ng serve insurance-details -o  
```  

### Step 5: Start the Second Micro-Frontend (MFE2)  
Run the `premium-payment` micro-frontend using this command:  
```bash  
ng serve premium-payment -o  
```  

### Step 6: Access the Application  
Open your browser and navigate to:  
[http://localhost:4200](http://localhost:4200)  

From the dashboard, you can navigate to different links to load the corresponding MFEs.  

## Project Structure  

- `host-app`: The container application hosting the micro-frontends.  
- `mfe1`: The `insurance-details` micro-frontend.  
- `mfe2`: The `premium-payment` micro-frontend.  

## License  
This project is licensed under the [MIT License](LICENSE).  

---

Happy coding! 🚀  
