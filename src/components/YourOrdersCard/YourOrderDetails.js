import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CircleNdLongDashes from '../CircleDashes/CircleNdLongDashes';
import CallButton from '../CallButton';

const Route = () => {
  return (
    <View style={styles.Route}>
      <View style={styles.RouteCon1}>
        <CircleNdLongDashes
          start="indore,madhya pradesh"
          end="lucknow,uttar pradesh"
        />
      </View>
      <View />
    </View>
  );
};
const Attachment = () => {
  return (
    <>
      <Text style={{color: '#434d59'}}>No Attachment</Text>
    </>
  );
};
const Load = () => {
  return (
    <ScrollView style={styles.LoadContainer}>
      <View style={styles.LoadDetails}>
        <Text style={styles.Heading}>Mineral Details </Text>
        <View style={styles.Line} />
        <View style={styles.Row}>
          <Text style={styles.Head}>Name</Text>
          <Text style={styles.detailsText}>moorang</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Head}>Size</Text>
          <Text style={styles.detailsText}>20mm</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Head}>Quantity</Text>
          <Text style={styles.detailsText}>15CuM</Text>
        </View>
      </View>
      <View style={styles.LoadDetails}>
        <Text style={styles.Heading}>Driver Details </Text>
        <View style={styles.Line} />
        <View style={styles.Row}>
          <Text style={styles.Head}>ID</Text>
          <Text style={styles.detailsText}>2451</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Head}>Name</Text>
          <Text style={styles.detailsText}>Manak</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Head}>Contact</Text>
          <Text style={styles.detailsText}>9889365245</Text>
        </View>
      </View>
      <View style={styles.LoadDetails}>
        <Text style={styles.Heading}>Truck Details </Text>
        <View style={styles.Line} />
        <View style={styles.Row}>
          <Text style={styles.Head}>Number</Text>
          <Text style={[styles.detailsText, styles.Uppercase]}>up65sx1254</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Head}>Company</Text>
          <Text style={[styles.detailsText, styles.Uppercase]}>tata</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Head}>Capacity</Text>
          <Text style={[styles.detailsText, styles.Uppercase]}>10ton</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Head}>Tyres</Text>
          <Text style={[styles.detailsText, styles.Uppercase]}>24tyres</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const YourOrderDetails = () => {
  const [Colo, setColo] = useState(0);
  return (
    <View style={styles.Container}>
      <View style={styles.nameSubContainer}>
        <FontAwesome name="circle" size={35} color="#00488d" />
        <View>
          <Text style={styles.cusHead}>Customer</Text>
          <Text style={styles.nameText}>Sumit Kumar</Text>
        </View>
      </View>
      <View style={styles.Container1}>
        <View style={styles.nameSubContainer}>
          <View style={styles.circle}>
            <MaterialCommunityIcons name="dump-truck" size={25} color="black" />
          </View>
          <View>
            <Text style={styles.cusHead}>Mineral</Text>
            <Text style={styles.text}>Moorang</Text>
          </View>
        </View>
        <View>
          <View style={styles.nameSubContainer}>
            <View style={styles.circle}>
              <FontAwesome name="rupee" size={25} color="black" />
            </View>
            <View>
              <Text style={styles.cusHead}>Price</Text>
              <Text style={styles.text}>₹ 10000.00</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.mobView}>
        <View style={styles.blank} />
        <View style={styles.mobScreen}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => {
                setColo(0);
              }}
              style={Colo == 0 ? styles.tabButtons1 : styles.tabButtons2}>
              <Text style={styles.Head}>Route</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Colo == 1 ? styles.tabButtons1 : styles.tabButtons2}
              onPress={() => {
                setColo(1);
              }}>
              <Text style={styles.Head}>Attachment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={Colo == 2 ? styles.tabButtons1 : styles.tabButtons2}
              onPress={() => {
                setColo(2);
              }}>
              <Text style={styles.Head}>Load Details</Text>
            </TouchableOpacity>
          </View>
          {Colo == 0 ? <Route /> : null}
          {Colo == 1 ? <Attachment /> : null}
          {Colo == 2 ? <Load /> : null}

          <View
            style={{
              alignItems: 'center',

              width: '100%',
              position: 'absolute',
              bottom: 0,
            }}>
            <CallButton />
          </View>
        </View>
      </View>
    </View>
  );
};

export default YourOrderDetails;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  Container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  nameSubContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: '#434d59',
    fontWeight: '700',
    fontSize: 17,
    marginLeft: 10,
  },
  cusHead: {
    marginLeft: 10,
    color: '#434d59',
  },
  Head: {color: '#434d59'},
  text: {
    marginLeft: 10,
    color: '#434d59',
    fontWeight: '600',
  },
  circle: {
    borderWidth: 1,
    borderRadius: 15,
    height: 30,
    width: 30,
    borderColor: '#00488d',
    backgroundColor: '#00cce5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobView: {
    backgroundColor: '#d9d9d9',
    flex: 1,
    marginTop: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    paddingTop: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  blank: {
    width: (Dimensions.get('window').width * 3) / 10,
    backgroundColor: '#FFF',
    height: Dimensions.get('window').height * 0.01,
    marginVertical: 5,
    borderRadius: 8,
  },
  mobScreen: {
    marginTop: 5,
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: Dimensions.get('window').height * 0.04,
  },
  tabContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    width: (Dimensions.get('window').width * 8) / 10,
    padding: 10,
    justifyContent: 'space-between',
    borderColor: '#d9d9d9',
    borderRadius: 8,
  },
  tabButtons2: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ffff',
  },
  tabButtons1: {
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#00488d',
    borderRadius: 8,
  },
  Head: {
    color: '#484d59',
  },
  Heading: {
    color: '#484d59',
    alignSelf: 'center',
    fontSize: 18,

    textAlign: 'center',
    borderColor: '#d9d9d9',
  },
  Route: {
    flex: 1,
    width: '100%',
    paddingLeft: '10%',
    marginTop: 20,
  },
  RouteCon1: {
    width: Dimensions.get('window').width * 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LoadDetails: {
    marginTop: 20,
  },
  Uppercase: {
    textTransform: 'uppercase',
  },
  LoadContainer: {
    //backgroundColor: "green",
    width: '80%',
    marginTop: 10,
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  flex: {
    flex: 1,
  },
  Line: {
    borderBottomWidth: 3,
    borderBottomColor: '#d9d9d9',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsText: {
    color: '#434d59',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});
