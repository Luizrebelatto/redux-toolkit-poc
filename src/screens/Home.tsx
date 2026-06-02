import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { clearName, setName } from "../store/userSlice";
import { useGetEpisodesQuery } from "../service/api";

export default function Home() {
  const dispatch = useAppDispatch();

  const name = useAppSelector(state => state.user.name);

  const {
    data,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useGetEpisodesQuery();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name || "Sem nome"}</Text>

      <View style={styles.actions}>
        <Button title="Set Luiz" onPress={() => dispatch(setName("Luiz"))} />
        <Button title="Clear" onPress={() => dispatch(clearName())} />
      </View>

      <Text style={styles.heading}>Episodes</Text>

      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : isError ? (
        <View style={styles.center}>
          <Text style={styles.error}>Error to loading</Text>
          <Button title="Tentar novamente" onPress={() => refetch()} />
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={data?.results}
          keyExtractor={item => String(item.id)}
          refreshing={isFetching}
          onRefresh={refetch}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemSubtitle}>
                {item.episode} · {item.air_date}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginVertical: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
  list: {
    flex: 1,
  },
  item: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  itemSubtitle: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  center: {
    alignItems: "center",
    gap: 8,
  },
  error: {
    color: "red",
  },
});
