export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      "books-table": {
        Row: {
          author: string | null
          created_at: string
          id: number
          pages: number | null
          png_image: string | null
          publisher: string | null
          svg_image: string | null
          title: string | null
          year: number | null
        }
        Insert: {
          author?: string | null
          created_at?: string
          id?: number
          pages?: number | null
          png_image?: string | null
          publisher?: string | null
          svg_image?: string | null
          title?: string | null
          year?: number | null
        }
        Update: {
          author?: string | null
          created_at?: string
          id?: number
          pages?: number | null
          png_image?: string | null
          publisher?: string | null
          svg_image?: string | null
          title?: string | null
          year?: number | null
        }
        Relationships: []
      }
      "countries-table": {
        Row: {
          code: string | null
          continent: string | null
          created_at: string
          flag: string | null
          id: number
          name: string | null
        }
        Insert: {
          code?: string | null
          continent?: string | null
          created_at?: string
          flag?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          code?: string | null
          continent?: string | null
          created_at?: string
          flag?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      link_list_items: {
        Row: {
          completed: boolean
          created_at: string
          id: string
          item_name: string
          list_id: string
          quantity: number
          user_id: string
        }
        Insert: {
          completed: boolean
          created_at?: string
          id?: string
          item_name: string
          list_id?: string
          quantity: number
          user_id?: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          id?: string
          item_name?: string
          list_id?: string
          quantity?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "link_list_items_list_id_fkey"
            columns: ["list_id"]
            isOneToOne: true
            referencedRelation: "link_list_lists"
            referencedColumns: ["id"]
          },
        ]
      }
      link_list_lists: {
        Row: {
          created_at: string
          id: string
          items: string[] | null
          list_name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          items?: string[] | null
          list_name: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          items?: string[] | null
          list_name?: string
          user_id?: string
        }
        Relationships: []
      }
      "polls-table": {
        Row: {
          a_count: number | null
          answer_a: string | null
          answer_b: string | null
          b_count: number | null
          created_at: string
          id: number
          question: string | null
          user_id: string | null
        }
        Insert: {
          a_count?: number | null
          answer_a?: string | null
          answer_b?: string | null
          b_count?: number | null
          created_at?: string
          id?: number
          question?: string | null
          user_id?: string | null
        }
        Update: {
          a_count?: number | null
          answer_a?: string | null
          answer_b?: string | null
          b_count?: number | null
          created_at?: string
          id?: number
          question?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      "tasks-table": {
        Row: {
          completed: boolean
          created_at: string
          id: number
          task: string | null
        }
        Insert: {
          completed: boolean
          created_at?: string
          id?: number
          task?: string | null
        }
        Update: {
          completed?: boolean
          created_at?: string
          id?: number
          task?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
