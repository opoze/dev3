import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  groupContainer: {
    flexDirection: 'row',
    height: 120,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: '#fff'
  },
  groupImage: {
    width: 80,
    height: 95,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  infoContainer: {
    marginRight: 20,
    marginVertical: 10,
    flex: 1,
  },
  line: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 16,
    flex: 1,
    margin: 4,
  },
  userText: {
    margin: 4,
    fontSize: 12,
  },
  keyText: {
    margin: 4,
    fontSize: 12,
    flex: 1,
  },
  dateText: {
    margin: 4,
    fontSize: 12,
  },
  descriptionText: {
    margin: 4,
    fontSize: 10,
  },
  list: {
    flex: 1,
    width: '100%',
  },
})
