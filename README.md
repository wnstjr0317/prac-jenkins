GET
___
contentGet(
id: Int
where: SequelizeJSON
limit: Int
order: String
offset: Int
): [content]
groupDefault: Int
An empty default Query.

groupGet(
id: Int
where: SequelizeJSON
limit: Int
order: String
offset: Int
): [group]
groupcontentDefault: Int
An empty default Query.

groupcontentGet(
groupid: Int
contentId: Int
where: SequelizeJSON
limit: Int
order: String
offset: Int
): [groupcontent]
multigroupDefault: Int
An empty default Query.

multigroupGet(
groupid: Int
userid: Int
where: SequelizeJSON
limit: Int
order: String
offset: Int
): [multigroup]
userDefault: Int
An empty default Query.

userGet(
id: Int
where: SequelizeJSON
limit: Int
order: String
offset: Int
): [user]

POST
___
contentDefault: Int
An empty default Mutation.

contentAdd(content: contentInput): content
Create a content

contentEdit(content: contentInput): content
Update a content

contentDelete(id: Int!): Int
Delete a content

groupDefault: Int
An empty default Mutation.

groupAdd(
group: groupInput
): group
Create a group

groupEdit(
group: groupInput
): group
Update a group

groupDelete(
id: Int!
): Int
Delete a group

groupcontentDefault: Int
An empty default Mutation.

groupcontentAdd(
groupcontent: groupcontentInput
): groupcontent
Create a groupcontent

groupcontentEdit(
groupcontent: groupcontentInput
): groupcontent
Update a groupcontent

groupcontentDelete(
groupid: Int!
): Int
Delete a groupcontent

multigroupDefault: Int
An empty default Mutation.

multigroupAdd(
multigroup: multigroupInput
): multigroup
Create a multigroup

multigroupEdit(
multigroup: multigroupInput
): multigroup
Update a multigroup

multigroupDelete(
groupid: Int!
): Int
Delete a multigroup

userDefault: Int
An empty default Mutation.

userAdd(
user: userInput
): user
Create a user

userEdit(
user: userInput
): user
Update a user

userDelete(
id: Int!
): Int
Delete a user