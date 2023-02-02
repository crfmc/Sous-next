# Sous: a cooking _assistant_.

## Table of Contents

- [Design Journey](#design-journey)
  - [User](#user)
    - [Motivation]()
    - [Use Cases]()
    - [Considerations]()
- [Implementation]()
  - [Technologies]()
  - [File Structure]()
  - [Interface]()
  - [Services]()
  - [API]()

---

# Design Journey

I began designing this site on Nov. 9, 2022.

I began the design phase for this site with physical paper and pencil, and original mock-ups were made using [Figma](https://www.figma.com/file/S9jxCpklGG6l3QX8RyApnB/Sous-next?node-id=1%3A2&t=MMw163raEzV4YjBH-1)

The purpose of Sous is to give users an interactive cooking assistant. It has 3 main functions:

- Give real-time instructions for cooking meals
- Recommend recipes based on available ingredients
- (Nice-to-have) Track a user's consumption

## User

The user, as I imagine them, has a number of reasons preventing them from cooking at home. Some of these primary reasons:

- Time. They are pressed for time and don't have the motivation, or
  the sheer opportunity to cook.
- _Materials_. Many people find themselves lacking the particular
  kitchenware to accomplish cooking a recipe. While particular tools are
  essential for some recipes, alternatives are not always provided.
- _Knowledge_.

## Considerations

My goal in building this application is not to automate the experience of cooking—the benefits of cooking for yourself and your loved ones are innumerable—rather, it is simply to add another tool to your kitchen.

The goal of technology like Sous is not to redefine cooking, but hone in on the experience of cooking itself; chopping, tasting, smelling, etc. Similar to software used in a doctor's office while meeting with patient, it should redirect, not capture, attention. As such, it will keep track of mundane tasks, such as listing ingredients and checking the time. Ideally, it would replace the multiple processes that we as humans struggle to manage. At its core it is a tool.

**Interface**

The part of this application that a user will interact with during cooking time should require the least interaction with the physical hardware with which the user accesses the page.

This is not to say that Sous _can't_ grab your attention. In some ways, it should! Letting you know that an eggplant might spoil if unused, or reminding you that the over has to be turned off. A future endeavor might be dedicated towards an interface

# Implementation

## Technologies

Since the structure of this site would be

## The Dashboard

I began with a notion of a dashboard because the user should have all of
the urgent information about things like: which foods are going bad,
what are some of the seasonal food recipes that one could cook, etc.
Also, it should alert the user when a long term timer is going off.

### On Meaurements

To simplify recipers, users should be able to convert between units, and even
create their own. Moreover, switching between volume and weight units should
be supported as well. The trade-off her is a large margin of error in measurement
for the simplicity of the user.
