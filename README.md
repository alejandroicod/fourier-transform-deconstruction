# 1E UX/UI Assessment
This repository contains all the instructions and boilerplate code for the development of the assessment for the UI/UX developer/designer position at 1E.

1. [ Introduction ](#intro)
2. [ Boilerplate Code ](#boilerplate)
3. [ Use Case ](#usecase)
4. [ Evaluation ](#evaluation)
5. [ Comments ](#comments)

<a name="intro"></a>
## 1. Introduction
The goal of this assessment is to evaluate the skills of the candidate on the creation of interactive prototypes (using a fixed list of provided libraries and frameworks) in order to solve certain use cases based on a list of requirements.

<a name="boilerplate"></a>
## 2. Boilerplate Code
The assessment has to be developed using this repository as boilerplate code. The dependencies included in this project are:
* **NPM** as a dependency manager.
* **Webpack** as a module bundler.
* **Stylus** as a CSS pre-processor.
* **BabelJS** as a JavaScript transpiler.
* **React** as a UI library.

The candidate can feel free to replace, include, exclude or upgrade any dependencies as far as the project is written in **ES6** and **React**.

* In the **/src/assets** folder, multiple screenshots of components have been provided for the candidate to be able to extract design patterns and apply them to the prototype.
* In the **/src/styles/variables.styl** file, the candidate can find a list of variables that are part of the basic 1E design guideline that have to be used as a reference on this assessment.

<a name="usecase"></a>
## 3. Use Case
The candidate is asked to design a UI for a **Security Administrator** persona. This user is responsible for managing the access rights of the users to the different applications of a **Platform**:
* The **Platform** is formed by multiple applications called **Consumers**.
* Each **Consumer** has a list of **Permissions**.
* One or multiple **Permissions** on a given **Consumer** can be assigned to a **Role**.
* Each **User** can be part of one or multiple **Roles**.
* Each **Role** can group one or multiple **Users**.

```
User <==> Role <==> Permission <==> Consumer
```

* **Security Administrator** should be able to:
  * Create/Edit/Delete **Roles**
  * Assign **Permissions** on a **Consumer** to **Roles**
  * Assign **Users** to **Roles**

* **Security Administrator** needs visibility of:
  * From **Consumer** point of view
    * **Permissions**, **Roles** and **Users** related to it (answering the question "**Who** can do **what** on a given **Consumer**?").
  * From **User** point of view
    * **Roles**, **Permissions** and **Consumers** related to it (answering the question "**What** can this **User** do on any **Consumer**?")

<a name="evaluation"></a>
## 4. Evaluation
The candidate is asked to implement an **interactive prototype** built on **React** that is capable of fulfilling the requirements listed on section 3 and a report/comments that explain the user flow. **1E** will receive a link to the **Git** repository that hosts the assessment.

The following aspects will be taken into consideration for the assessment:
* UX design solving the use cases provided for the given persona.
* Organisation and modularity of the code.
* ES6 and React usage skills.
* UI design according to design guidelines, matching the given examples as much as possible.
* Size of the final bundle (additional dependencies included in the bundle).

Any instructions or comments about the implementation have to be included in the following **Candidate Comments** section of this **README.md** file.

<a name="comments"></a>
## Candidate Comments ##
